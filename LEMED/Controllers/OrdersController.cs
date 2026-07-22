using System.Security.Claims;
using LEMED.Data;
using LEMED.Models;
using LEMED.Models.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LEMED.Controllers
{
    [ApiController]
    [Route("api/orders")]
    [Authorize]   // ← فقط کاربر لاگین‌کرده اجازه‌ی دسترسی داره
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrdersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(CreateOrderDto dto)
        {
            if (dto.Items == null || dto.Items.Count == 0)
                return BadRequest(new { message = "سبد خرید خالی است." });

            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
                ?? User.FindFirstValue("sub"));

            var order = new Order
            {
                UserId = userId,
                ShippingAddress = dto.ShippingAddress,
                ShippingCity = dto.ShippingCity,
                ShippingPhone = dto.ShippingPhone,
                Status = "Pending",
            };

            decimal total = 0;

            foreach (var itemDto in dto.Items)
            {
                var product = await _context.Products.FindAsync(itemDto.ProductId);
                if (product == null)
                    return BadRequest(new { message = $"محصول با شناسه‌ی {itemDto.ProductId} پیدا نشد." });

                var unitPrice = product.Price;
                total += unitPrice * itemDto.Quantity;

                order.Items.Add(new OrderItem
                {
                    ProductId = product.Id,
                    Size = itemDto.Size,
                    Color = itemDto.Color,
                    Quantity = itemDto.Quantity,
                    UnitPrice = unitPrice,
                });
            }

            order.TotalPrice = total;

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                order.Id,
                order.TotalPrice,
                order.Status,
                order.CreatedAt,
            });
        }

        [HttpGet("mine")]
        public async Task<IActionResult> GetMyOrders()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)
                ?? User.FindFirstValue("sub"));

            var orders = await _context.Orders
                .Where(o => o.UserId == userId)
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .OrderByDescending(o => o.CreatedAt)
                .ToListAsync();

            return Ok(orders);
        }
    }
}