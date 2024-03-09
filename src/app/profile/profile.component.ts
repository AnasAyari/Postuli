import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  experiences: any[] = []; // Array to store experiences
  skills: string[] = ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Tailwind CSS']; // Initial skills
  open:boolean = false;
  openExperience:boolean = false;

  constructor() { }

  addExperience() {
    // Implement logic to add a new experience
    const newExperience = {
      title: 'New Experience',
      company: 'New Company',
      duration: '2022 - Present',
      description: 'Description of the new experience'
    };
    this.experiences.push(newExperience);
  }
  openSkillForm(){
    this.open = true;
  }
  openExperienceForm(){
    this.openExperience = true;
  }
  addSkill() {
    // Implement logic to add a new skill
    const newSkill = 'New Skill';
    this.skills.push(newSkill);
  }

  worker:boolean=false;
  diffrent:boolean=true;

}
