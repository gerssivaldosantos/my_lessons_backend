const app = require('./app');
const { connect } = require('./database')


async function main() {
    //database connection
    await connect();
    //express apliaction
    await app.listen(4000)
    console.log("Server on port 4000");
}

main();