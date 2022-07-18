import HighlightJS from 'highlight.js';
import {AfterViewInit, Directive, ElementRef} from "@angular/core";

@Directive({
  selector: 'code[highlight]',
})
export class HighlightCodeDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    HighlightJS.highlightBlock(this.elRef.nativeElement);
  }

}
