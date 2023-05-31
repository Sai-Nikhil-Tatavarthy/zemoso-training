package yourname.assingment.main;
import yourname.assignment.data.A;
import yourname.assignment.singleton.B;

public class MainClass {

	public static void main(String[] args) {
		A obj =new A();
		//global variables which can get default values.
		obj.disp();
		//local variables which are not initialized but does not get any default values.
		obj.show();
		//static methods can only access static variables.
		B obj1 = new B("str");
		obj1.B_method("str");
		obj1.print();
		
	}

}