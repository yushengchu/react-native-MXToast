//
//  MXToastBridge.m
//  toastDemo
//
//  Created by joker on 2017/9/29.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MXToastBridge.h"
#import "MXToast.h"

#import <React/RCTBridgeModule.h>
#import <React/RCTBundleURLProvider.h>

@interface MXToastBridge ()<RCTBridgeModule>

@property (copy,nonatomic) RCTResponseSenderBlock responseCallBack;

@end

@implementation MXToastBridge

RCT_EXPORT_MODULE(MXToastBridge)

RCT_EXPORT_METHOD(show:(NSString*)message params:(NSDictionary*)params){
  dispatch_async(dispatch_get_main_queue(), ^{
    __unsafe_unretained MXToastBridge *weakSelf = self;
    
    NSString* type = params[@"type"];
    CGFloat padding = [params[@"padding"] floatValue];
    CGFloat duration = [params[@"duration"] floatValue];
    //没有消息内容默认不展示
    if(!message){
      return;
    }
    if([type isEqualToString:@"bottom"]){
      [weakSelf showToastWithMsg:message paddingBottom:padding duration:duration];
    }else if ([type isEqualToString:@"top"]){
      [weakSelf showToastWithMsg:message paddingTop:padding duration:duration];
    }else{
      [weakSelf showToastWithMsg:message withDuration:duration];
    }
    
  });
}

/**
 居中展示toast 自定义时间

 @param message 消息内容
 @param duration 展示时间
 */
- (void)showToastWithMsg:(NSString*)message withDuration:(CGFloat)duration{
  if (duration) {
    [MXToast showWithText:message duration:duration];
  }else{
    [MXToast showWithText:message];
  }
}


/**
 底部展示Toast 自定义时间

 @param message toast内容
 @param paddingBottom 距离底部高度
 @param duration 展示时间
 */
- (void)showToastWithMsg:(NSString*)message paddingBottom:(CGFloat)paddingBottom duration:(CGFloat)duration{
  if (duration) {
    [MXToast showWithText:message bottomOffset:paddingBottom duration:duration];
  }else{
    [MXToast showWithText:message bottomOffset:paddingBottom];
  }
}


/**
 顶部展示toast

 @param message toast内容
 @param paddingTop 距离顶部高度
 @param duration 展示时间
 */
- (void)showToastWithMsg:(NSString*)message paddingTop:(CGFloat)paddingTop duration:(CGFloat)duration{
  if (duration) {
    [MXToast showWithText:message topOffset:paddingTop duration:duration];
  }else{
    [MXToast showWithText:message topOffset:paddingTop];
  }
}

@end
