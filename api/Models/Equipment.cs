namespace api.Models
{
    public class Equipment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Condition { get; set; }
        public int Quantity { get; set; }
        public int CategoryId { get; set; }

    }
}
