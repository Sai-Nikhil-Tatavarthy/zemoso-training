import java.util.HashMap;
import java.io.*;

class FileReadWrite {
	HashMap<Character, Integer> Map = new HashMap<Character, Integer>();
	
	public void characterCount(){
		try {
		FileReader fileread = new FileReader("/home/zadmin/name.txt");
		int index;
		//converts every character to its ascii value
		while((index = fileread.read())!= -1) {
			//System.out.println(index);
			if(!Character.isWhitespace((char)index)) {
				if(Map.containsKey((char)index)) {
					Map.put((char)index, Map.get((char)index)+1);
				}
				else {
					Map.put((char)index, 1);
				}
			}
		}
		//System.out.println(Map);
		//HashMap<Character,Integer> sorted = new HashMap<>(Map);
		//Set<Entry<Character,Integer>> amps = sorted.entrySet();
		//System.out.println(amps);
		saveData();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void saveData() {
		try {
			File f1 = new File("/home/zadmin/count.txt");
			FileWriter filewrite = new FileWriter(f1);
			filewrite.write(Map.toString());
			filewrite.close();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}
};


class MainClasss{

	public static void main(String[] args) {
		FileReadWrite obj = new FileReadWrite();
		obj.characterCount();

	}

}