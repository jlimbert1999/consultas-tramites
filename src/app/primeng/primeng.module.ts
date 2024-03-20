import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MenubarModule,
    ImageModule,
    ButtonModule,
    CheckboxModule,
    KeyFilterModule,
    InputTextModule,
    InputNumberModule,
    CardModule,
    TabViewModule,
    MessagesModule,
    ToastModule,
    ToolbarModule
  ],
})
export class PrimengModule {}
