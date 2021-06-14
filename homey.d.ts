import SimpleClass = require("./lib/SimpleClass.js");
import Api = require("./lib/Api.js");
import ApiApp = require("./lib/ApiApp.js");
import App = require("./lib/App.js");
import BleAdvertisement = require("./lib/BleAdvertisement.js");
import BleCharacteristic = require("./lib/BleCharacteristic.js");
import BleDescriptor = require("./lib/BleDescriptor.js");
import BlePeripheral = require("./lib/BlePeripheral.js");
import BleService = require("./lib/BleService.js");
import CloudOAuth2Callback = require("./lib/CloudOAuth2Callback.js");
import CloudWebhook = require("./lib/CloudWebhook.js");
import Device = require("./lib/Device.js");
import DiscoveryResult = require("./lib/DiscoveryResult.js");
import DiscoveryResultMAC = require("./lib/DiscoveryResultMAC.js");
import DiscoveryResultMDNSSD = require("./lib/DiscoveryResultMDNSSD.js");
import DiscoveryResultSSDP = require("./lib/DiscoveryResultSSDP.js");
import DiscoveryStrategy = require("./lib/DiscoveryStrategy.js");
import Driver = require("./lib/Driver.js");
import FlowArgument = require("./lib/FlowArgument.js");
import FlowCard = require("./lib/FlowCard.js");
import FlowCardAction = require("./lib/FlowCardAction.js");
import FlowCardCondition = require("./lib/FlowCardCondition.js");
import FlowCardTrigger = require("./lib/FlowCardTrigger.js");
import FlowCardTriggerDevice = require("./lib/FlowCardTriggerDevice.js");
import FlowToken = require("./lib/FlowToken.js");
import Image = require("./lib/Image.js");
import InsightsLog = require("./lib/InsightsLog.js");
import LedringAnimation = require("./lib/LedringAnimation.js");
import LedringAnimationSystem = require("./lib/LedringAnimationSystem.js");
import LedringAnimationSystemProgress = require("./lib/LedringAnimationSystemProgress.js");
import Manager = require("./lib/Manager.js");
import Signal = require("./lib/Signal.js");
import Signal433 = require("./lib/Signal433.js");
import Signal868 = require("./lib/Signal868.js");
import SignalInfrared = require("./lib/SignalInfrared.js");
import ZigBeeNode = require("./lib/ZigBeeNode.js");
import ZwaveCommandClass = require("./lib/ZwaveCommandClass.js");
import ZwaveNode = require("./lib/ZwaveNode.js");

declare const manifest: any;
declare const env: any;

declare module "homey" {
  export {
    // Properties
    env,
    manifest,
    // Classes
    SimpleClass,
    Api,
    ApiApp,
    App,
    BleAdvertisement,
    BleCharacteristic,
    BleDescriptor,
    BlePeripheral,
    BleService,
    CloudOAuth2Callback,
    CloudWebhook,
    Device,
    DiscoveryResult,
    DiscoveryResultMAC,
    DiscoveryResultMDNSSD,
    DiscoveryResultSSDP,
    DiscoveryStrategy,
    Driver,
    FlowArgument,
    FlowCard,
    FlowCardAction,
    FlowCardCondition,
    FlowCardTrigger,
    FlowCardTriggerDevice,
    FlowToken,
    Image,
    InsightsLog,
    LedringAnimation,
    LedringAnimationSystem,
    LedringAnimationSystemProgress,
    Manager,
    Signal,
    Signal433,
    Signal868,
    SignalInfrared,
    ZigBeeNode,
    ZwaveCommandClass,
    ZwaveNode
  };
}
