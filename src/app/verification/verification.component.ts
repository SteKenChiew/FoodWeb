import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})

export class VerificationComponent implements AfterViewInit {
  verificationForm: FormGroup;
  
  email = "dummy@gmail.com";

  @ViewChild('digit1Input', { static: false }) digit1Input: ElementRef | null = null;
  @ViewChild('digit2Input', { static: false }) digit2Input: ElementRef | null = null;
  @ViewChild('digit3Input', { static: false }) digit3Input: ElementRef | null = null;
  @ViewChild('digit4Input', { static: false }) digit4Input: ElementRef | null = null;
  @ViewChild('digit5Input', { static: false }) digit5Input: ElementRef | null = null;
  @ViewChild('digit6Input', { static: false }) digit6Input: ElementRef | null = null;

  constructor(private fb: FormBuilder, private renderer: Renderer2)  {
    this.verificationForm = this.fb.group({
      digit1: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      digit2: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      digit3: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      digit4: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      digit5: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      digit6: ['', [Validators.required, Validators.pattern(/^\d$/)]]
    });
  }

  ngAfterViewInit() {
    this.setupInputNavigation();
  }

  private setupInputNavigation() {
    const inputs: (ElementRef | null)[] = [
      this.digit1Input,
      this.digit2Input,
      this.digit3Input,
      this.digit4Input,
      this.digit5Input,
      this.digit6Input
    ];

    inputs.forEach((input, index) => {
      if (input && index < inputs.length - 1) {
        this.verificationForm.get(`digit${index + 1}`)?.valueChanges.subscribe(value => {
          if (value) {
            this.renderer.selectRootElement(inputs[index + 1]!.nativeElement).focus();
          }
        });
      }
    });
  }



}
