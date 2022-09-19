//object 
// let sampleObj = { 
// }
// //******************* */
// let employee: {
//     pro1: string,
//     pro2: number
// };
// let var1= employee = {
//     pro1: "Pakistan",
//     pro2: 1255,
// }
// let var2 = employee = {
//     pro1 : "I am in BCC class",
//     pro2: 123
// }
// let var3 = employee = {
//     pro1 : "new text",
//     pro2: 123
// }
// let var4 = employee = {
//     pro1 : "new text",
//     pro2: 123
// }
// console.log(var2.pro1, var1.pro2)
// ///************************** */
// console.log(typeof var1.pro1)
//****************** */
// const fruit = {
//     fruit1: "Apple",
//     fruti2: 8877
// }
// fruit.fruit1= "dfdfdfdfd"
// fruit.fruti2= 1223
// fruit.fruti2="string text " //Type 'string' is not assignable to type 'number'.
////**************************** */
// let poet: {
//     BirthY: number, 
//     name: string
// }
// poet={BirthY: 1950, name: "poetName"}
//poet = "string value" ///error
// ///************************************* */
// ///Alias object type
// type poet = {
//     BirthY: number, 
//     name: string
// };
// let newPoet: poet;
// newPoet = {BirthY: 5555, name: ""}
//////////////************************** */
// // // STuct Type\
// type person = {     ///obect 1
//     name: string,
//     DOB: number
// }
// type employee = { //object 2
//     name: string,
//     DOB: number,
//     new_employee: boolean
// }
// let var1: employee ={
//     DOB: 122222,
//     name: "",
//     new_employee: true
// }
// let var2 = var1;  //struct
// var2 ={
//     DOB: 1126963,
//     name: "new name",
//     new_employee: false
// }
// let var5 = var2;
// console.log(var5.name)
// console.log(var2.DOB)
// ////********************** */
// ////usage checking
// type firstandLastName = { //object definition
//     first: string,
//     second: string
// }
// let var1: firstandLastName ={
//     first: "name1",
//     second: "name2",
//    // third: "value " //excess ..then throw an erro
// }
// const var2: firstandLastName ={
//     first: "",
//     //second: "",
// }
///nested object
// type Poem = {
//     author: {first: string, last: string} //nested object
//     poety_name: string
// }
// let var1: Poem ={
//     author: {first: "1st name", last: "kjkjk"},
//     poety_name:"poem "
// }
//console.log(var1.author.first)
///**************************** */
//optional properties
// type Book = {           //object 
//     author?: string, //optional property
//     pages: number
// }
// let var1:Book = {
//     author: "",
//     pages: 99
// }
// let var2:Book = {
//     pages: 100,
// }
// console.log(var2.author)
// // ///
// let poem = Math.random() > 0.5
// ? {name1: "text", pages: 234}////if fale
// : {name1: "another text", rhymes: true} //true
// console.log(typeof poem.name1)
// console.log(typeof poem.pages)
// //////******************** */
//ternary 
//condition-check ? contion1 : contion2 
///inferred Object Type Unions
// const poem = Math.random() > 0.5
// ?{}
// :
//***************** */
//explicity type union
// type PoemWithPage={
//     name: string,
//     pages: number
// }
// type PoemwithRhymes= {
//     name: string,
//     rhymes: boolean
// }
// type Poem = PoemWithPage | PoemwithRhymes
// let var1: Poem = Math.random() > 0.3
// ? {name: "", pages: 123}
// : {name: "new text", rhymes: true}
// var1.name  ///ok
// var1.rhymes ///error
// // ///*********************** */
// type PowerwithPages = {
//     name: string,
//     pages: number
// }
// type PoemwithRhymes = {
//     name: string,
//     rhyemes: boolean
// }
// type Poem = PowerwithPages | PoemwithRhymes; //union done
// let var1: Poem = Math.random () > 0.5
// ?{name: "", pages: 1222}
// :{name: "new text", rhyemes: false}
// if ("pages" in var1){                       //narrow
//   console.log(var1.pages); 
// }else   {
//     console.log(var1.rhyemes);}
// }
// ///************************** */
// //union discriminated
// type LowRain = {
//     flood: string,    ///discrimant
//     location: string
// }
// type HighRain ={
//     flood: string,
//     rain_mm: number
// }
// type Rain = LowRain & HighRain;
// let var1: Rain ={
//     flood:"",           //discrimant
//     location: "sindh",
//     rain_mm: 1000
// }
///*********************************** */
//never type
//type var1 = number & string;
/////********** */
///****************** */
//function in TS
// function sing1(para1: string){
//     console.log ("meesage")
// }
// sing1("text");
//******************************* */
// //function in TS
// function sing1(para1: string, para2: number){
//     console.log ("meesage")
// }
// sing1("my message");
///************************ */
// function announcdsSong(song: string, singer?: string){
//         console.log(`Song : ${song}`)
//         //console.log("song is " + song)
//     if(singer){
//             console.log(`Singer is ${singer}`)
//         }
//         }
//         console.log(announcdsSong("song name", "singer name"))
//
///// func default values
// function rateSong (song: string, rating = 0){ //default para value
// //console.log(`${song} gets rating ${rating}`)
// console.log(song + "got rating : " + rateSong)
// }
// console.log(rateSong("song name"))
// console.log(rateSong("song name", 2))
//************************* */
// //rest parameters 
// function func1(singer: string, ...songs:string [])
// {
//     for(const var1 of songs){
//         console.log(`${var1} , by singer name ${singer}`)
//     }
// }
// func1("Shahzad roye","songof Shahazad"); //ok
// func1("Vital Sign", "song name1", "song name2", "song name3", "song name4")
//********************** */
//return types
// function singSong (songs: string[]){
//     for (let song of songs){
//         console.log(`${song}`)
//     }
//     return songs.length;
// }
// singSong (["tx1", "text2"])   //error TS2554: Expected 1 arguments, 
//                                     //but got 3.
//Explicit
function test() {
    return;
}
//************************ */
// function func_name (song: string):Date | undefined{
//     switch(song){
//         case "song name 1":
//             return new Date('') ;
//         case "song name 2"
//             return undefined         //Type 'number' is not assignable to type 'Date'.
//         default:
//             return undefined;  ///OK
//     }}
////****************************** */
//void retun
// let songLogger: (song:string) => void;
// songLogger = (song) =>{
//     console.log(`${song}`);
// }
// songLogger("sdfsdf");
// /////******************** */
// //void return exaxmple 2
// function returnvoid(){
//     return;
// }
// let var1: string ;
// var1 = returnvoid();//Type 'void' is not assignable to type 'string'.
// //******************************************* */
//function types
// let var1: () => string | undefined;
// let var2:(() =>string) |undefined
//************** */
var songs = ["text1", "text2", "text3"];
songs.forEach(function (songs, index) {
    console.log("".concat(songs, " is at index ").concat(index));
});
