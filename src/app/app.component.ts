import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { evaluate, tokenize } from '@suprnation/evaluator';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

/*
Since the code is short, I didn't create any more components, otherwise we would have too many files
for a very short code. But in the perfect scenario where we'd want an application that would scale, we would have
a few more components than these. A good candidate would be the history expressions template, for example.
We could also have a few services, like one for handling the evaluation/tokenization of the inputs.
We could have a module to start the app instead of the actual AppComponent, too, if needed. Constants could
be in a separate file too

As of styles, they're also very minimal. They're more on the placement side of things instead of actually focusing on
a pixel perfect good looking design (as I don't know how to design an application myself, but I can very easily follow existing
guidelines, usually provided by web designers).

Overall, the app achieves the required points with an extremely simple UI.
*/

const MAX_HISTORY_ENTRIES = 5;
const DEBOUNCE_TIME_INPUT_MS = 1000;

type HistoryExpression = {
  id: number;
  expression: string;
  value: number;
};

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App implements OnInit {
  input = new FormControl();
  errorMessage = '';
  expression = '';
  value: number = 0;
  historyExpressions: HistoryExpression[] = [];

  private idGenerator = 1;

  ngOnInit(): void {
    this.input.valueChanges
      .pipe(debounceTime(DEBOUNCE_TIME_INPUT_MS), distinctUntilChanged())
      .subscribe((value) => {
        const tokens = tokenize(value);

        if (tokens.success) {
          this.errorMessage = '';
          const result = evaluate(value);

          if (result.success) {
            this.expression = value;
            this.value = result.value;
            this.historyExpressions.unshift({
              id: this.idGenerator,
              expression: value,
              value: result.value,
            });
            this.idGenerator++;

            if (this.historyExpressions.length > MAX_HISTORY_ENTRIES) {
              this.historyExpressions = this.historyExpressions.slice(
                0,
                MAX_HISTORY_ENTRIES
              );
            }
          }
        } else {
          this.errorMessage = tokens.reason;
        }
      });
  }
}
