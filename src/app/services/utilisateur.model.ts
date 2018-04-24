export class Utilisateur {
    public string Cin_Utilisateur { get; set; }
    public string Password { get; set; }
    public string email { get; set; }
    public Qestion Qestion { get; set; }
    public string Reponse { get; set; }
    public string pseudo { get; set; }
    public ICollection<Comment> Discutions { get; set; }
    public ICollection<Discution> Discutionn { get; set; }
}
