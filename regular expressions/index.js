const regex = /the/g

const statement = "the day when the priest made the announcement in the Church was the first Sunday of the month"

// console.log(statement.replace("the", "every")) 
//replaces only th efirst occurence of "the"

console.log(statement.replace(regex, "every"))
//makes the as global and stores in regex

//refer to regexr.com website