NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/LoggedDataSweep.h",{3087:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3087\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LoggedDataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep that was logged to a WirelessNode.</div></div>",3089:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3089\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep()</div><div class=\"TTSummary\">Creates a LoggedDataSweep object with a tick and timestamp of 0.</div></div>",3090:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3090\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">LoggedDataSweep(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">timestamp,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName last\">tick,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a LoggedDataSweep object.</div></div>",3092:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3092\" class=\"NDPrototype NoParameterForm\">Timestamp m_timestamp</div><div class=\"TTSummary\">The Timestamp of the data sweep.</div></div>",3093:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3093\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_tick</div><div class=\"TTSummary\">The tick value representing the count of each sweep in a datalogging session (increments with each sweep).</div></div>",3094:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3094\" class=\"NDPrototype NoParameterForm\">ChannelData m_data</div><div class=\"TTSummary\">Contains one or more WirelessDataPoints, corresponding to each channel\'s data for this sweep.</div></div>",3096:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3096\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp of the sweep as a Timestamp</div></div>",3097:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3097\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> nanoseconds() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the timestamp of the sweep in nanoseconds since UTC</div></div>",3098:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3098\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> tick() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the tick value of the sweep</div></div>",3099:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3099\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelData&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel data in this sweep as a WirelessDataPoint::ChannelData container.</div></div>",3100:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3100\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timestamp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Timestamp&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timestamp of the sweep</div></div>",3101:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3101\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">tick</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the tick of the sweep</div></div>",3102:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3102\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> data(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelData&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the data of the sweep</div></div>",3104:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of LoggedDataSweep objects.</div></div>"});