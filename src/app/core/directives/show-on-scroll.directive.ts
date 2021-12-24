import { Directive, HostListener, Input, ElementRef, Renderer2, OnDestroy } from "@angular/core";

@Directive({
    selector:"[appShowOnScroll]"
})
export class ShowOnScrollDirective implements OnDestroy{

    loadedDivCount: number = 0;

    constructor(
      private elRef:ElementRef,
      private r2:Renderer2){
      this.loadDiv(this.totalDivCount());
    }

    totalDivCount() {
      return (+window.innerHeight/200) + 1;
    }

    loadDiv(totalDiv: number) {
      for (let i = 0; i < totalDiv; i++) {
        this.loadedDivCount += 1;
        const divElm = this.r2.createElement('div');
        const btnElm: HTMLButtonElement = this.r2.createElement('button');
        btnElm.innerText = 'Click me '+ this.loadedDivCount;
        divElm.classList.add('virtual-div', 'w-100', 'mb20');
        btnElm.classList.add('btn', 'btn-primary')
        this.addBtnClickListener(btnElm, this.loadedDivCount);
        this.r2.appendChild(divElm, btnElm);
        this.r2.appendChild(this.elRef.nativeElement, divElm);
      }
    }

    @HostListener('document:scroll') onScroll(){
        const calculatedHeight = window.scrollY + window.innerHeight;
        const scrollHeight = document.body.scrollHeight;
        if(calculatedHeight >= scrollHeight) {
          this.loadDiv(1);
        }
    }

    addBtnClickListener(btnElmRef: HTMLButtonElement, toBeDisplayed: any) {
      this.r2.listen(btnElmRef,'click', (e) => {
        alert(`Button ${toBeDisplayed} is clicked.`);
      })
    }

    ngOnDestroy(){
    }
}