import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RxjsService } from '../../services/rxjs.service';
import { Observable } from 'rxjs';
import { Project } from '../../services/rxjs.service';

@Component({
  selector: 'app-tableview',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './tableview.component.html',
  styleUrl: './tableview.component.css'
})
export class TableviewComponent implements OnInit{

  projects$!: Observable<Project[]>;

  constructor(private rxjsService: RxjsService) {}

  ngOnInit(): void {
    this.projects$ = this.rxjsService.getProjects();
  }
  
  generateProject(project: Project): void {
    this.rxjsService.createProject(project);
  }

  editProject(project: Project): void {
    this.rxjsService.updateProject(project);
  }

  deleteProject(projectId: string): void {
    this.rxjsService.deleteProject(projectId);
  }
}
