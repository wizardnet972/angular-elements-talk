import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getPreviousMonths, addDays } from './utils';

import { Observable, Subject } from 'rxjs';
import {
  map,
  take,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

@Component({
  encapsulation: ViewEncapsulation.Native,
  selector: 'contrib-graph',
  templateUrl: './contrib-graph.component.html',
  styleUrls: ['./contrib-graph.component.css']
})
export class ContribGraphComponent implements OnInit {
  loadRepo = new Subject();
  contributions = [];
  months = getPreviousMonths(new Date().getMonth());

  @Input()
  set repo(value) {
    this.contributions = null;

    this.loadRepo.next(value);
  }

  @Output() pick = new EventEmitter();

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('-- on init --');

    this.loadRepo
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(repo =>
          this.http.post('https://git-restapi.herokuapp.com/api/stats', {
            repo
          })
        )
      )
      .subscribe((json: any) => {
        this.contributions = json.days.reverse().map((n, i) => ({
          n,
          title:
            n === 0
              ? 'no contribution'
              : `${n} contribution on ${addDays(new Date(), -i)}`
        }));
        this.cd.detectChanges();
      });
  }

  ngDoCheck() {
    console.log('-- change detection --');
  }
}
