//
//  RNBrightnessNewArch.m
//  RNBrightnessNewArch
//
//  Created by Ahmed Awaad on 3/11/25.
//  Copyright © 2025 Ahmed Awaad. All rights reserved.
//

#import "RNBrightnessNewArch.h"

@implementation RNBrightnessNewArch

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(setBrightnessLevel:(double)brightnessLevel)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    CGFloat value = fmax(0.0, fmin(brightnessLevel, 1.0));
    [UIScreen mainScreen].brightness = value;
  });
}


RCT_EXPORT_METHOD(getBrightnessLevel:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
  resolve(@([UIScreen mainScreen].brightness));
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeBrightnessSpecJSI>(params);
}
#endif

@end
