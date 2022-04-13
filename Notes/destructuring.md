DESTRUCTURING

destructuring is a way to get fields out of an object.

<script>
const person = {
    name: "Victoria",
    age: 100,
    favoriteColor: "blue"
}

const name2= person.name
console.log("name: ", name2)

const { name, age, favoriteColor} = person
console.log("destructuring... name", name)
console.log("destructuring... age", age)
console.log("destructuring... favoriteColor", favoriteColor)

    </script>

    props will always be an object

    create lists of objects (like friends)
    use friends.map to get different things to render

    tomorrow create a new app following day 2 styling and conditional rendering