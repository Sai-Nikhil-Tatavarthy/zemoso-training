class invalidcvv extends Exception{
	public invalidcvv(String str){
		super(str);
	}
};

class invalidATM extends Exception{
	public invalidATM(String str){
		super(str);
	}
};

class invalidOTP extends Exception{
	public invalidOTP(String str){
		super(str);
	}
};


class verify extends Exception{
		
	public void CheckDetails(String cvv,String atm,String otp)throws invalidcvv,invalidATM,invalidOTP {
		
		if(atm.length()!=16){
			throw new invalidATM("Wrong ATM Number Inserted");
		}
		if(cvv.length()!=3)
		{
			throw new invalidcvv("Wrong cvv Inserted");
		}
		if(otp.length()!=4){
			throw new invalidOTP("Wrong OTP Number Inserted");
		}
	}
};

class MainClass {

	public static void main(String[] args) {

		try {
			verify obj = new verify();
			obj.CheckDetails("440","10054978045540456","45650");
		}
		catch(invalidcvv | invalidATM | invalidOTP e) {
			System.out.println(e.getMessage());
		}
		finally {
			System.out.println("Exception not caught.");
		}

	}

}