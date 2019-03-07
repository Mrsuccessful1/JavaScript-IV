// CODE here for your Lambda Classes

class Person {

    constructor(attributes){

      this.name = PersonAttributes.name;
      this.age = PersonAttributes.age;
      this.location = PersonAttributes.location;
      this.gender = PersonAttributes.gender;

    }
    
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructors extends Person {
    constructor (instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo('subject'){
        return `Today we are learning about ${subject}`
    }

    grade('subject'){
        return `${student.name} receives a perfect score on ${subject}`
    }

}

class Student extends Instructors {
    constructor (studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects(){
        return `${this.favSubjects}`
    }

    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Student {
    constructor (projectManagersAttributes){
        super(projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugsCode(subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}