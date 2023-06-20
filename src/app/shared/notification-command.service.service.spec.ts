import { TestBed } from '@angular/core/testing';

import { NotificationCommandService } from './notification-command.service.service';

describe('NotificationCommandServiceService', () => {
  let service: NotificationCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
