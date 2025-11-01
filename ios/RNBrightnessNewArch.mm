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

RCT_EXPORT_METHOD(setBrightnessLevel:(float)brightnessLevel)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [UIScreen mainScreen].brightness = brightnessLevel;
    });
}

RCT_REMAP_METHOD(getBrightnessLevel,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    resolve(@([UIScreen mainScreen].brightness));
}

@end
