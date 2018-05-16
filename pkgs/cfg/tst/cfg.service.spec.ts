import { TestBed, inject } from '@angular/core/testing';

import { CfgService } from '../src/cfg.service';
import { AppCfg, TargetPlatform } from '../src/cfg.types';
import { CFG_OPTIONS } from '../src/cfg.defaults';
import { CfgModule } from '../src/cfg.module';

const AppEnv: AppCfg = {
  production: false,
};

describe('CfgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CfgModule.forRoot(AppEnv)]
    });
  });

  it(
    'should be created',
    inject([CfgService], (service: CfgService) => {
      expect(service).toBeTruthy();
    })
  );
});
