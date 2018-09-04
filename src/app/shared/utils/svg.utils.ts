import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

export const loadSvgResources = (id: MatIconRegistry, ds: DomSanitizer) => {
  id.addSvgIcon("gifts", ds.bypassSecurityTrustResourceUrl(""));
};
