import { Component } from '@angular/core';
import { ParagraphModel } from './models/paragraph.model';
import { SectionModel } from './models/section.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  bullets: string[] = [
    'Micro Machines V4 - Youre Not Gonna Make It',
    'Neural Network (Java)',
    'Resume Project'
  ];

  sections: Array<SectionModel> = [];
  title = 'resume-project';
  newSectionHeader: string = '';

  constructor() {
    this.addNewSection(
      'Professional Summary',
      'Software Engineer',
      ['4+ years of Core Java and Spring Boot experience developing and optimizing server-side applications. Strong in data structures, algorithms, and scalable design, with expertise in testing, code reviews, and maintainability. Proven ability to quickly learn new frameworks and lead teams to deliver high-quality solutions ahead of schedule.']);

    this.addNewSection(
      'Education',
      'Illinois State University', [
      "BS in General Computer Science",
      "GPA: 3.6/4.0",
      "Graduation Year: 2020"
    ]);

    this.addNewBulletedSection(
      'Work Experience',
      'Software Engineer (Technical Lead Experience)', [
      "Complete code reviews resulting in a 50% reduction in reopened issues.",
      "Led an agile team of 8 developers, improving performance and consistently meeting project deadlines.",
      "Collaborate with cross-functional teams on design and functionality, significantly enhancing customer satisfaction.",
      "Mentored developers on Core Java best practices, debugging techniques, and maintainable code design.",
      "Plan and implement new requirements from the client and third-party vendors.",
      "Redesign and refactor code to improve system efficiency, readability, and accuracy.",
      "Resolve complex system bugs and structural issues to ensure stability and reliability."
    ]);

    this.addToSection(this.sections[2],
      'Software Engineer', [
      'Created and executed unit tests to validate functionality and reliability, reducing defects and improving maintainability.',
      'Developed new application pages and batches based on client requests and user stories.',
      'Created and updated data tables in a DB2 Database.',
      'Utilized Google Cloud Platform to access files and application logs.',
      'Assisted in migrating the application from Struts 2 and JSP to a Spring Boot and Angular stack.',
      'Enhanced the application by implementing requested changes and resolving bugs.',
      'Monitored and tracked application edits, bug fixes, and data change requests using Jira.',
      'Managed code changes with Azure Version Control.'],
      true
    )

    this.addNewBulletedSection(
      'Technical Skills',
      'Programming Languages', [
      'Java',
      'SQL',
      'HQL',
      'Typescript',
      'HTML',
      'CSS',
      'C#'
    ]);

    this.addToSection(this.sections[3],
      'Frameworks',
      [
        'SpringBoot',
        'Hibernate',
        'Angular'
      ],
      true);
    this.addToSection(this.sections[3],
      'Data Bases',
      [
        'DB2',
        'MongoDB'
      ],
      true);
    this.addToSection(this.sections[3],
      'Tools',
      [
        'Eclipse',
        'DBeaver',
        'GitHub',
        'Visual Studio Code',
        'Jira'
      ],
      true);
    
    this.addToSection(this.sections[3],
      'Cloud Platform',
      [
        'Google Cloud Platform',
        'Azure'
      ],
      true);
    
    this.addToSection(this.sections[3],
      'Other',
      [
        'Code Design',
        'Code Refactoring',
        'Code Review',
        'Design Documents',
        'Mentoring',
        'Debugging',
        'Testing'
      ],
      true);
    
    this.addNewBulletedSection(
      'Personal Projects',
      '',
      [
        'Micro Machines V4 - Youre Not Gonna Make It',
        'Neural Network (Java)',
        'Resume Project'
      ]);
  }

  addNewSection(sectionHeading: string, paragraphHeader: string, paragraphs: Array<string>) {
    let section = new SectionModel();
    let paragraph = new ParagraphModel();

    paragraph.paragraphHeader = paragraphHeader;

    paragraphs.forEach(p => {
      paragraph.paragraphBodies.push(p)
    });
    
    section.addParagraph(paragraph);
    section.heading = sectionHeading;

    this.sections.push(section);
    this.clearForm();
  }

  addNewBulletedSection(sectionHeading: string, paragraphHeader: string, paragraphs: Array<string>) {
    let section = new SectionModel();
    let paragraph = new ParagraphModel();

    paragraph.paragraphHeader = paragraphHeader;

    paragraphs.forEach(p => {
      paragraph.paragraphBodies.push(p)
      paragraph.isBulleted = true;
    });
    
    section.addParagraph(paragraph);
    section.heading = sectionHeading;

    this.sections.push(section);

    this.clearForm();
  }

  addToSection(section: SectionModel, paragraphHeader: string, paragraphs: Array<string>, isBulleted: boolean) {
    
    let paragraph = new ParagraphModel();
    paragraph.paragraphHeader = paragraphHeader;

    paragraphs.forEach(p => {
      paragraph.paragraphBodies.push(p)
      paragraph.isBulleted = isBulleted;
    });
    
    section.addParagraph(paragraph);
    
  }

  delete() {
    this .sections= this.sections.filter(s => s.heading !== '');
  }

  clearForm() {
    this.newSectionHeader = '';
  }
}
