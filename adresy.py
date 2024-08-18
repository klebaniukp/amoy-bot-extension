file = open("adresy.txt")

js_array = "["

for line in file:
	line = line.strip()
	line = "'" + line + "',"
	js_array = js_array + line

js_array = js_array[:-1] + "]"

print(js_array)

