import java.util.Scanner;
interface A{
	public void getA();
	public void dispA();
}
interface B{
	public void getB();
	public void dispB();
}
interface C{
	public void getC();
	public void dispC();

}
interface D implements A,B,C{
	public void getD();

}
class E implements D{
	public void getA(){
		System.out.println("interface A get method");
	}
	public void dispA(){
		System.out.println("interface A disp method");
	}
	public void getB(){
		System.out.println("interface B get method");
	}
	public void dispB(){
		System.out.println("interface B disp method");
	}
	public void getC(){
		System.out.println("interface C get method");
	}
	public void dispC(){
		System.out.println("interface C disp method");
	}
	public void getD(){
		System.out.println("interface D get mehtod ");
	}
};

class MainClass {

	static void method1(Interface1 i) {
	};
	static void method2(Interface2 i) {
	};
	static void method3(Interface3 i) {
	};
	static void method4(Newinterface i) {
	};

	public static void main(String[] args) {
		E s = new E();
		String st;
		Scanner in = new Scanner(System.in);
		System.out.println("Enter the name of the interface");
		st = in.nextLine();
		s.method1(st);
		s.method2(st);
		s.method3(st);
		s.method4(st);
		
	}
}