commands 
ALL IN FRONTEND FOLDER
npm install -g @angular/cli 
ng version
ng new mean-stack-agency
IN MEAN STACK AGENCY FOLDER
to remove git file 
rm -Force .git
to run
ng serve -o
top - level directories below 
mean-stack-agency -> project root directory 
e2e - end to end testing, src
node_modules -> package modules
src -> source files which has apps, assets, enviroments 
mean-stack-agency
 - .editorconfig
 - .gitignore  - these 2 for git configure git account and repo
 - angular.json - CLI configuration files 
 - browserlist - used primarily for sharing or if you want to eliminate or set any target in the browser
 ex some old browser may not run angular so set settings that allow to run
 - karma.conf.js - unit testing
 - package-lock.json- all modules version info 
 - package.json - meta data that is used to configure application and dependencies
 - README.md 
 - tsconfig.app.json - type script for configuring the compiler as angular apps are written in typescript so they need to compiled to javascript
 - tsconfig.spec.json - unit testing
 - tslint.json -linting only for managing code i.e., nicely written and consistent
all thes applicaion configuration files 
in 
src 
- favicon.ico 
- index.html - single page application
 - main.ts - main entry to program
 - pollyfills.ts - to provide code when some browsers may not recognize like browse animations
 - test.ts - unit testing
  app folder 
  -app-routing.module.ts - for routing module
  -app.component.css - external style sheet for this
  -app.component.html - template /view
  -app.component.spec.ts -anything with spec is unit testing
  -app.component.ts -component or src contain all business logic aka controller
  -app.module.ts - module all these components of our files into single component.
  assests folder- to keep static content like images js files 
  - .gitkeep 
  environments 
  - environment.prod.ts & enviornment.ts for configuring your development
  when u r running u r developing application u setup inside the env.ts files for production in prod.ts
  data binding: mechanism used for pushing and pulling data 
  property binding: from source to view 
  event binding : from view to source 

  <h1 >{{title}}</h1>
 <h2 [style]="green">{{sum()}}</h2> 
<!--h1 is property binding to value second bind property using style both are property binding itself one way binding source to view-->
<!--now event binding one way  so its binding to function we use parenthesis and define clickme function ..click in angular same as onclick in js-->
<!--now to pass data from input tag to button-->
<!-- <input id="input" type="text"> # instead of id -->
<!--instead of [value]="message"-->
<!-- <input #inputmsg type="text" (keyup)="clickMe(inputmsg.value)"> -->
<!--ngModel or banana operator-->
<!-- <input #inputmsg type="text" [value]="message">  -->
<div>
<input #inputmsg type="text" [(ngModel)]="message"> 
<!-- <button (click) = "clickMe('hi')">Click Me</button> -->
<button (click) = "clickMe(inputmsg.value)">Click Me</button>
<!--through event binding we passed input value to function there again its assigned to message so through property binding we are making it display back here in a way its 2 way binding-->
<h3>{{message}}</h3>
</div>

<div>
  <button (click)="toggle()">Show/Hide</button>
  <!-- <h3 *ngIf="show; else showPublic">Secret message</h3>
  <ng-template #showPublic>
    <h3>Public message</h3>
  </ng-template>
   -->
   <ng-template *ngIf="show;then showPrivate; else showPublic"></ng-template>
   <ng-template #showPrivate>
    <h3>Public message</h3>
  </ng-template>
  <ng-template #showPublic>
    <h3>Public message</h3>
  </ng-template>
</div>
<div>
  <!-- <p *ngFor="let num of nums; index as i; count as total; even as even; odd as odd">
{{i+1}}.{{num}}
  </p> -->
  <button (click)="inc()">+</button>
  <button (click)="dec()">-</button>
  <table>
    <ng-container *ngFor="let num of nums; index as i; count as total; even as even; odd as odd">
      <tr [style]="even ? green :red"style = "color:white; text-align:center;">
      <td style="width:50px">
        {{i+1}}
      </td>
      <td style="width:100px">
        {{num}}
      </td>
      </tr>

    </ng-container>
  </table>
</div>

<div>

</div>
 nums =[10,20,25,33,40,56];
  sum = ()=>{
    return this.nums[0]+this.nums[1];
  }
  red = "background-color:red";
  green = "background-color:green";
  message = "";
  clickMe = (val: string)=>{
    console.log(val);
    this.message =val;
  }
  show = true;
  toggle(){
    this.show =!this.show;
  }
  inc(){
    this.nums.push(Math.floor(Math.random()*100));
  }
  dec(){
    this.nums.pop();
  }