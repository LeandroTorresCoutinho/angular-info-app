import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-typescript-news',
  templateUrl: './typescript-news.component.html',
  styleUrls: ['./typescript-news.component.sass']
})
export class TypescriptNewsComponent implements OnInit {
  @ViewChild('iframe') iframe:ElementRef;
  @Input() gistId = "LeandroTorresCoutinho/b38b300af04bd5def38d24d3e281a87d";
  @Input() file:string = "gistfile1.txt";
  
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void{
    debugger
    let fileName = (this.file) ? this.file : ''; 
    this.iframe.nativeElement.id = 'gist-' + this.gistId;
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
      let content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
        <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js?file=${fileName}"></script>
        </body>
      </html>
    `;
    debugger
    doc.open();
    doc.write(content);
    doc.close();
  }
  async getCodeBoxComponent(){
    this.viewContainerRef.clear();
    const { CodeBoxComponent } = await import('../code-box/code-box.component')
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(CodeBoxComponent)
    )
  }

  
}
