import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RxjsService } from '../../services/rxjs.service';
import { Observable } from 'rxjs';
import { Project } from '../../services/rxjs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tableview',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './tableview.component.html',
  styleUrl: './tableview.component.css'
})
export class TableviewComponent implements OnInit{

  projects$!: Observable<Project[]>;
  

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.projects$ = this.rxjsService.getProjects();
  }
  
  generateProject(tittle: String): void {
    const newProject: Project = {
      id: Date.now(),
      tittle,
      tasks: [],
    }
    this.rxjsService.createProject(newProject);
  }

  editProject(project: Project): void {
    this.rxjsService.updateProject(project);
  }

  deleteProject(projectId: number): void {
    this.rxjsService.deleteProject(projectId);
  }
}
