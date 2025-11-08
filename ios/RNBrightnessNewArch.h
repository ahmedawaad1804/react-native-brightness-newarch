//
//  RNBrightnessNewArch.h
//
//  Created by Ahmed Awaad on 3/11/25.
//

#ifdef RCT_NEW_ARCH_ENABLED
#import <RNBrightnessSpec/RNBrightnessSpec.h>
@interface RNBrightnessNewArch : NSObject <NativeBrightnessSpec>
#else
#import <React/RCTBridgeModule.h>
@interface RNBrightnessNewArch : NSObject <RCTBridgeModule>
#endif

@end


