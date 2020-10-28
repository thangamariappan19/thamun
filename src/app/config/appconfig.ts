export class AppConfig {
  public readonly APIUrl = 'http://preprod.acekuwait.com/api/v0/';

  //public readonly APIUrl = 'http://localhost:55614/';

   public readonly Token = localStorage.getItem('Token');
   
   public readonly categories = 'categories';

   public readonly products = 'products';

}