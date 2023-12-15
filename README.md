Implemented Algorithm
1. We initialize read and write streams in order to process the CSV files in chunks and create a map, “departmentTotals”, to store the sales of each department. 
- This allows us to handle the unsorted data as a key-value pair.
2. We use the “,” delimiter to split the rows into columns and proceed to process the CSV file row by row. We, then, get the department name (as is) and sales (converted to number) from each row and then check if the department (name) does not exist in the map.
- If it doesn’t, we initialize a new department to 0 and add the sales amount.
- If it does exist, we simply add the current row’s sales amount to it.
3. After processing all the rows in the original file, we iterate through each “department” - “current total” pair in the map and write it to the output file one by one.

Computational Complexity
1. The worst-case time complexity of the implemented algorithm is O(n) where n is the number of lines as we iterate through all of the lines in the input file and map.
2. The worst-case space complexity of the implemented algorithm is O(n) where n is the number of unique entries (department - total sales pair) stored in the map.
