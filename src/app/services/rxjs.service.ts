import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Project {
  id: String,
  tittle: String,
  tasks: Task[]
}

export interface Task {
  id: String,
  tittle: String, 
  description: String
}

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  private projectsSubject = new BehaviorSubject<Project[]>([]);
  public projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  constructor() { }

  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  createProject(project: Project): void {
    const currentProjects = this.projectsSubject.getValue();
    this.projectsSubject.next([...currentProjects, project]);
  }

  updateProject(updatedProject: Project): void {
    const currentProjects = this.projectsSubject.getValue().map(project =>
      project.id === updatedProject.id ? updatedProject : project
    );
    this.projectsSubject.next(currentProjects);
  }

  deleteProject(projectId: string): void {
    const updatedProjects = this.projectsSubject
      .getValue()
      .filter(project => project.id !== projectId);
    this.projectsSubject.next(updatedProjects);
  }
  
}
