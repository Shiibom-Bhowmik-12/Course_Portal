import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css'],
})
export class ZoomComponent {
  async ngAfterContentInit(): Promise<any> {
    const { ZoomMtg } = await import('@zoomus/websdk');
    ZoomMtg.setZoomJSLib('https://source.zoom.us/2.14.0/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    ZoomMtg.i18n.load('en-US');
    ZoomMtg.i18n.reload('en-US');

    let payload = {
      meetingNumber: '78216023191',
      passWord: 'Uy95VB',
      sdkKey: 'z4LSeXkrT4KWGzsnXTwl9A',
      sdkSecret: 'M4Bt5ftd971Hjvixfh7rw8uxNCZ19g3J',
      userName: 'Shibom',
      userEmail: 'skrbhowmik.2023@gmail.com',
      role: '0',
      leaveUrl: 'http://localhost:4200/dashboard',
    };

    ZoomMtg.generateSDKSignature({
      meetingNumber: payload.meetingNumber,
      role: payload.role,
      sdkKey: payload.sdkKey,
      sdkSecret: payload.sdkSecret,
      success: function (signature: any) {
        ZoomMtg.init({
          leaveUrl: payload.leaveUrl,
          success: function (data: any) {
            ZoomMtg.join({
              meetingNumber: payload.meetingNumber,
              passWord: payload.passWord,
              sdkKey: payload.sdkKey,
              userName: payload.userName,
              userEmail: payload.userEmail,
              signature: signature.result,
              tk: '',
              success: function (data: any) {
                console.log(data);
              },
              error: function (error: any) {
                console.log('-----Error Join ----->', error);
              },
            });
          },
          error: function (error: any) {
            console.log('-----Error Init ----->', error);
          },
        });
      },
      error: function (error: any) {
        console.log('-----Error Generate SDK Signature----->', error);
      },
    });
  }
}
