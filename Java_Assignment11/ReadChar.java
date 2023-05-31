import java.io.File;
import java.io.FileReader;
import java.io.BufferedReader;

public class ReadChar {
public static void main(String[] args) {
	File file = new File("/home/zadmin/First.java"); 
	  
	  BufferedReader b = new BufferedReader(file); 
	  String st; 
	  while ((st = b.readLine()) != null);  
	char[] ghbj = st.toCharArray();
	int count = 0;
	for (char c : ghbj)
	{
		switch(c) {
		case'a':
		case 'b':
		case 'c':
		case 'd':
		case 'e':
			count++;
			break;
	}
}
System.out.println("Numbers are :"+count);

}
}