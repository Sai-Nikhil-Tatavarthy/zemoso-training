package yourname.assignment.singleton;
public class B{
	String str;
		B(String otherStr){
		str=otherStr;
	}
	
	public static B_method(String s) {
		//static methods can only access static variables;
		str=s;
		B sc = new B(s);
		return sc;
	}
	public void print() {
		System.out.println(str);
	}

	public static void main(String[] args)
	{
	string str = "ABCD";
	B obj = new B(str);
	obj.B_method(str);
	obj.pritn();
	}

}