package Utilities;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class ReadCSV {

	public static Map<String,String> parseFile(String fileName, String delimiter) {
		BufferedReader br = null;
		String line = "";
	    Map<String,String> parseData= new HashMap<>();
		try {

			br = new BufferedReader(new FileReader(fileName));
			while ((line = br.readLine()) != null) {

				// use comma as separator
				String[] values = line.split(delimiter);
				String username=values[0];
				String password=values[1];
				parseData.put(username, password);
			}

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return parseData;

	}
}
