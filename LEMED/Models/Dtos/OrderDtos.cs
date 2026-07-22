namespace LEMED.Models.Dtos
{
    public class CreateOrderItemDto
    {
        public int ProductId { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public int Quantity { get; set; }
    }

    public class CreateOrderDto
    {
        public string ShippingAddress { get; set; }
        public string ShippingCity { get; set; }
        public string ShippingPhone { get; set; }
        public List<CreateOrderItemDto> Items { get; set; }
    }
}