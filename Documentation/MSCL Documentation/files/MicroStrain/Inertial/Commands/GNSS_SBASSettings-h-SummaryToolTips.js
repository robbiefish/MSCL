NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_SBASSettings.h",{591:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype591\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",592:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype592\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",593:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype593\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype594\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",595:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype595\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SBASSettings MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">SBASSettingsData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",596:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype596\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> SBASSettings MakeGetCommand()</div></div>",597:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype597\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> SBASSettingsData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",598:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype598\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",599:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype599\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SBASSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">FunctionSelector&nbsp;</td><td class=\"PName last\">function_selector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">SBASSettingsData&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">) : m_functionSelector(function_selector), m_data(dataToUse)</td></tr></table></div></div>",601:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype601\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The MipTypes::FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",602:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype602\" class=\"NDPrototype NoParameterForm\">SBASSettingsData m_data</div><div class=\"TTSummary\">The ConstellationSettingsData to send to the device.</div></div>"});