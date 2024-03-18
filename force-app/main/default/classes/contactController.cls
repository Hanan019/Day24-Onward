public with sharing class contactController {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContactList() {
    List<Contact> conList = [
      SELECT id, Name, FirstName, LastName, Title, Phone, Email, PhotoUrl
      FROM Contact
      WHERE PhotoUrl != NULL
      WITH USER_MODE
      LIMIT 10
    ];

    return conList;
  }
}
