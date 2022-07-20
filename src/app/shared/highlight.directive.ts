import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'code[highlight]',
})
export class HighlightCodeDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.elRef.nativeElement);
  }
}
