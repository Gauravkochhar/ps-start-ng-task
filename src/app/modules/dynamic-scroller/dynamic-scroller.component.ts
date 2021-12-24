import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-scroller',
  templateUrl: './dynamic-scroller.component.html',
  styleUrls: ['./dynamic-scroller.component.scss']
})
export class DynamicScrollerComponent implements OnInit {

  public totalDiv = 20;
  public divList: ElementRef[] = [];
  @ViewChild('parentNode', {static: false}) parentNode!: ElementRef;

  constructor(
    private _renderer: Renderer2,
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
    ) { }

  ngOnInit(): void {
    // for (let i = 0; i < this.totalDiv; i++) {
    //   this.createDynamicElement()
      
    // }
  }

  // createDynamicElement() {
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BlockComponent);
  //   const componentRef = this.viewContainerRef.createComponent(componentFactory);
  //   const blockInstance = componentRef.instance as BlockComponent;
  //   blockInstance.onDelete.subscribe(() => {
  //   this.blockDeleted();
  //   });
  // }

}
