public with sharing class AccountHelper {


    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountData(){
        return [select id, Name, Industry, Rating
                from Account with USER_MODE];
    }
    
}