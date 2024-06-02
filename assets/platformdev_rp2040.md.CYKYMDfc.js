import { _ as _export_sfc, c as createElementBlock, o as openBlock, a8 as createStaticVNode } from "./chunks/framework.DyMmIvSC.js";
const __pageData = JSON.parse('{"title":"Raspberry Pi RP2040","description":"","frontmatter":{},"headers":[],"relativePath":"platformdev_rp2040.md","filePath":"platformdev_rp2040.md"}');
const _sfc_main = { name: "platformdev_rp2040.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="raspberry-pi-rp2040" tabindex="-1">Raspberry Pi RP2040 <a class="header-anchor" href="#raspberry-pi-rp2040" aria-label="Permalink to &quot;Raspberry Pi RP2040&quot;">​</a></h1><p>The following table shows the current driver status for peripherals on RP2040 MCUs:</p><table><thead><tr><th>System</th><th>Support</th></tr></thead><tbody><tr><td><a href="./drivers/adc">ADC driver</a></td><td>✔️</td></tr><tr><td><a href="./drivers/audio#pwm-hardware">Audio</a></td><td>✔️</td></tr><tr><td><a href="./features/backlight">Backlight</a></td><td>✔️</td></tr><tr><td><a href="./drivers/i2c">I2C driver</a></td><td>✔️</td></tr><tr><td><a href="./drivers/spi">SPI driver</a></td><td>✔️</td></tr><tr><td><a href="./drivers/ws2812">WS2812 driver</a></td><td>✔️ using <code>PIO</code> driver</td></tr><tr><td><a href="./drivers/eeprom">External EEPROMs</a></td><td>✔️ using <code>I2C</code> or <code>SPI</code> driver</td></tr><tr><td><a href="./drivers/eeprom#wear_leveling-configuration">EEPROM emulation</a></td><td>✔️</td></tr><tr><td><a href="./drivers/serial">serial driver</a></td><td>✔️ using <code>SIO</code> or <code>PIO</code> driver</td></tr><tr><td><a href="./drivers/uart">UART driver</a></td><td>✔️ using <code>SIO</code> driver</td></tr></tbody></table><h2 id="gpio" tabindex="-1">GPIO <a class="header-anchor" href="#gpio" aria-label="Permalink to &quot;GPIO&quot;">​</a></h2><img alt="Raspberry Pi Pico pinout" src="https://i.imgur.com/nLaiYDE.jpg" width="48%"><img alt="Sparkfun RP2040 Pro Micro pinout" src="https://i.imgur.com/1TPAhrs.jpg" width="48%"><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The GPIO pins of the RP2040 are not 5V tolerant!</p></div><h3 id="pin-nomenclature" tabindex="-1">Pin nomenclature <a class="header-anchor" href="#pin-nomenclature" aria-label="Permalink to &quot;Pin nomenclature&quot;">​</a></h3><p>To address individual pins on the RP2040, QMK uses the <code>GPx</code> abbreviation -- where the <code>x</code> stands for the GPIO number of the pin. This number can likely be found on the official pinout diagram of your board. Note that these GPIO numbers match the RP2040 MCU datasheet, and don&#39;t necessarily match the number you see printed on the board. For instance the Raspberry Pi Pico uses numbers from 1 to 40 for their pins, but these are not identical to the RP2040&#39;s GPIO numbers. So if you want to use the pin 11 of the Pico for your keyboard, you would refer to it as <code>GP8</code> in the config files.</p><h3 id="alternate-functions" tabindex="-1">Alternate functions <a class="header-anchor" href="#alternate-functions" aria-label="Permalink to &quot;Alternate functions&quot;">​</a></h3><p>The RP2040 features flexible GPIO function multiplexing, this means that every pin can be connected to nearly all the internal peripherals like I2C, SPI, UART or PWM. This allows for flexible PCB designs that are much less restricted in the selection of GPIO pins. To find out which pin can use which peripheral refer to the official <a href="https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf#page=14" target="_blank" rel="noreferrer">Raspberry PI RP2040 datasheet</a> section 1.4.3 GPIO functions.</p><h2 id="selecting-hardware-peripherals-and-drivers" tabindex="-1">Selecting hardware peripherals and drivers <a class="header-anchor" href="#selecting-hardware-peripherals-and-drivers" aria-label="Permalink to &quot;Selecting hardware peripherals and drivers&quot;">​</a></h2><p>QMK RP2040 support builds upon ChibiOS and thus follows their convention for activating drivers and associated hardware peripherals. These tables only give a quick overview which values have to be used, please refer to the ChibiOS specific sections on the driver pages.</p><h3 id="i2c-driver" tabindex="-1">I2C Driver <a class="header-anchor" href="#i2c-driver" aria-label="Permalink to &quot;I2C Driver&quot;">​</a></h3><table><thead><tr><th>RP2040 Peripheral</th><th><code>mcuconf.h</code> values</th><th><code>I2C_DRIVER</code></th></tr></thead><tbody><tr><td><code>I2C0</code></td><td><code>RP_I2C_USE_I2C0</code></td><td><code>I2CD0</code></td></tr><tr><td><code>I2C1</code></td><td><code>RP_I2C_USE_I2C1</code></td><td><code>I2CD1</code></td></tr></tbody></table><p>To configure the I2C driver please read the <a href="./drivers/i2c#arm-configuration">ChibiOS/ARM</a> section.</p><h3 id="spi-driver" tabindex="-1">SPI Driver <a class="header-anchor" href="#spi-driver" aria-label="Permalink to &quot;SPI Driver&quot;">​</a></h3><table><thead><tr><th>RP2040 Peripheral</th><th><code>mcuconf.h</code> values</th><th><code>SPI_DRIVER</code></th></tr></thead><tbody><tr><td><code>SPI0</code></td><td><code>RP_SPI_USE_SPI0</code></td><td><code>SPID0</code></td></tr><tr><td><code>SPI1</code></td><td><code>RP_SPI_USE_SPI1</code></td><td><code>SPID1</code></td></tr></tbody></table><p>To configure the SPI driver please read the <a href="./drivers/spi#chibiosarm-configuration">ChibiOS/ARM</a> section.</p><h3 id="uart-driver" tabindex="-1">UART Driver <a class="header-anchor" href="#uart-driver" aria-label="Permalink to &quot;UART Driver&quot;">​</a></h3><table><thead><tr><th>RP2040 Peripheral</th><th><code>mcuconf.h</code> values</th><th><code>UART_DRIVER</code></th></tr></thead><tbody><tr><td><code>UART0</code></td><td><code>RP_SIO_USE_UART0</code></td><td><code>SIOD0</code></td></tr><tr><td><code>UART1</code></td><td><code>RP_SIO_USE_UART1</code></td><td><code>SIOD1</code></td></tr></tbody></table><h2 id="double-tap" tabindex="-1">Double-tap reset boot-loader entry <a class="header-anchor" href="#double-tap" aria-label="Permalink to &quot;Double-tap reset boot-loader entry {#double-tap}&quot;">​</a></h2><p>The double-tap reset mechanism is an alternate way in QMK to enter the embedded mass storage UF2 boot-loader of the RP2040. It enables bootloader entry by a fast double-tap of the reset pin on start up, which is similar to the behavior of AVR Pro Micros. This feature activated by default for the Pro Micro RP2040 board, but has to be configured for other boards. To activate it, add the following options to your keyboards <code>config.h</code> file:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RP2040_BOOTLOADER_DOUBLE_TAP_RESET</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Activates the double-tap behavior</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RP2040_BOOTLOADER_DOUBLE_TAP_RESET_TIMEOUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">U</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Timeout window in ms in which the double tap can occur.</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RP2040_BOOTLOADER_DOUBLE_TAP_RESET_LED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GP17</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Specify a optional status led by GPIO number which blinks when entering the bootloader</span></span></code></pre></div><h2 id="pre-defined-rp2040-boards" tabindex="-1">Pre-defined RP2040 boards <a class="header-anchor" href="#pre-defined-rp2040-boards" aria-label="Permalink to &quot;Pre-defined RP2040 boards&quot;">​</a></h2><p>QMK defines two boards that you can choose from to base your RP2040 powered keyboard upon. These boards provide pre-configured default pins and drivers.</p><h3 id="generic-pro-micro-rp2040" tabindex="-1">Generic Pro Micro RP2040 <a class="header-anchor" href="#generic-pro-micro-rp2040" aria-label="Permalink to &quot;Generic Pro Micro RP2040&quot;">​</a></h3><p>This is the default board that is chosen, unless any other RP2040 board is selected in your keyboards <code>rules.mk</code> file. It assumes a pin layout for the I2C, SPI and Serial drivers which is identical to the Sparkfun Pro Micro RP2040, however all values can be overwritten by defining them in your keyboards <code>config.h</code> file. The <a href="#double-tap">double-tap</a> reset to enter boot-loader behavior is activated by default.</p><table><thead><tr><th>Driver configuration define</th><th>Value</th></tr></thead><tbody><tr><td><strong>I2C driver</strong></td><td></td></tr><tr><td><code>I2C_DRIVER</code></td><td><code>I2CD1</code></td></tr><tr><td><code>I2C1_SDA_PIN</code></td><td><code>GP2</code></td></tr><tr><td><code>I2C1_SCL_PIN</code></td><td><code>GP3</code></td></tr><tr><td><strong>SPI driver</strong></td><td></td></tr><tr><td><code>SPI_DRIVER</code></td><td><code>SPID0</code></td></tr><tr><td><code>SPI_SCK_PIN</code></td><td><code>GP18</code></td></tr><tr><td><code>SPI_MISO_PIN</code></td><td><code>GP20</code></td></tr><tr><td><code>SPI_MOSI_PIN</code></td><td><code>GP19</code></td></tr><tr><td><strong>Serial driver</strong></td><td></td></tr><tr><td><code>SERIAL_USART_DRIVER</code> (<a href="./drivers/serial#the-sio-driver">SIO Driver</a> only)</td><td><code>SIOD0</code></td></tr><tr><td><code>SOFT_SERIAL_PIN</code></td><td>undefined, use <code>SERIAL_USART_TX_PIN</code></td></tr><tr><td><code>SERIAL_USART_TX_PIN</code></td><td><code>GP0</code></td></tr><tr><td><code>SERIAL_USART_RX_PIN</code></td><td><code>GP1</code></td></tr><tr><td><strong>UART driver</strong></td><td></td></tr><tr><td><code>UART_DRIVER</code></td><td><code>SIOD0</code></td></tr><tr><td><code>UART_TX_PIN</code></td><td><code>GP0</code></td></tr><tr><td><code>UART_RX_PIN</code></td><td><code>GP1</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The pin-outs of Adafruit&#39;s KB2040 and Boardsource&#39;s Blok both deviate from the Sparkfun Pro Micro RP2040. Lookup the pin-out of these boards and adjust your keyboards pin definition accordingly if you want to use these boards.</p></div><h3 id="generic-rp2040-board" tabindex="-1">Generic RP2040 board <a class="header-anchor" href="#generic-rp2040-board" aria-label="Permalink to &quot;Generic RP2040 board&quot;">​</a></h3><p>This board can be chosen as a base for RP2040 keyboards which configure all necessary pins and drivers themselves and do not wish to leverage the configuration matching the Generic Pro Micro RP2040 board. Thus it doesn&#39;t provide any pre-configured pins or drivers. To select this board add the following line to your keyboards <code>rules.mk</code> file.</p><div class="language-make vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">make</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BOARD = GENERIC_RP_RP2040</span></span></code></pre></div><h2 id="split-keyboard-support" tabindex="-1">Split keyboard support <a class="header-anchor" href="#split-keyboard-support" aria-label="Permalink to &quot;Split keyboard support&quot;">​</a></h2><p>Split keyboards are fully supported using the <a href="./drivers/serial">serial driver</a> in both full-duplex and half-duplex configurations. Two driver subsystems are supported by the RP2040, the hardware UART based <code>SIO</code> and the Programmable IO based <code>PIO</code> driver.</p><table><thead><tr><th>Feature</th><th><a href="./drivers/serial#the-sio-driver">SIO Driver</a></th><th><a href="./drivers/serial#the-pio-driver">PIO Driver</a></th></tr></thead><tbody><tr><td>Half-Duplex operation</td><td></td><td>✔️</td></tr><tr><td>Full-Duplex operation</td><td>✔️</td><td>✔️</td></tr><tr><td><code>TX</code> and <code>RX</code> pin swapping</td><td></td><td>✔️</td></tr><tr><td>Any GPIO as <code>TX</code> and <code>RX</code> pin</td><td>Only UART capable pins</td><td>✔️</td></tr><tr><td>Simple configuration</td><td></td><td>✔️</td></tr></tbody></table><p>The <code>PIO</code> driver is much more flexible then the <code>SIO</code> driver, the only &quot;downside&quot; is the usage of <code>PIO</code> resources which in turn are not available for advanced user programs. Under normal circumstances, this resource allocation will be a non-issue.</p><h2 id="rp2040-second-stage-bootloader-selection" tabindex="-1">RP2040 second stage bootloader selection <a class="header-anchor" href="#rp2040-second-stage-bootloader-selection" aria-label="Permalink to &quot;RP2040 second stage bootloader selection&quot;">​</a></h2><p>As the RP2040 does not have any internal flash memory it depends on an external SPI flash memory chip to store and execute instructions from. To successfully interact with a wide variety of these chips a second stage bootloader that is compatible with the chosen external flash memory has to be supplied with each firmware image. By default an <code>W25Q080</code> compatible bootloader is assumed, but others can be chosen by adding one of the defines listed in the table below to your keyboards <code>config.h</code> file.</p><table><thead><tr><th style="text-align:left;">Compatible with flash chip</th><th>Selection</th></tr></thead><tbody><tr><td style="text-align:left;">W25Q080</td><td>Selected by default</td></tr><tr><td style="text-align:left;">AT25SF128A</td><td><code>#define RP2040_FLASH_AT25SF128A</code></td></tr><tr><td style="text-align:left;">GD25Q64CS</td><td><code>#define RP2040_FLASH_GD25Q64CS</code></td></tr><tr><td style="text-align:left;">W25X10CL</td><td><code>#define RP2040_FLASH_W25X10CL</code></td></tr><tr><td style="text-align:left;">IS25LP080</td><td><code>#define RP2040_FLASH_IS25LP080</code></td></tr><tr><td style="text-align:left;">Generic 03H flash</td><td><code>#define RP2040_FLASH_GENERIC_03H</code></td></tr></tbody></table><h2 id="rp2040_ce" tabindex="-1">RP2040 Community Edition <a class="header-anchor" href="#rp2040_ce" aria-label="Permalink to &quot;RP2040 Community Edition {#rp2040_ce}&quot;">​</a></h2><p>The &quot;RP2040 Community Edition&quot; standard is a pinout that was defined by a committee of designers on the BastardKB Discord server.</p><p>These boards are designed to be a drop-in replacement for keyboards wanting an upgrade from ATmega32u4 based pro micros (eg. Elite-C).</p><table><thead><tr><th>Pinout Compatible Controllers</th></tr></thead><tbody><tr><td><a href="https://github.com/plut0nium/0xB2/" target="_blank" rel="noreferrer">0xB2 Splinky</a></td></tr><tr><td><a href="https://keeb.io/products/elite-pi-usb-c-pro-micro-replacement-rp2040" target="_blank" rel="noreferrer">Elite-Pi</a></td></tr><tr><td><a href="https://github.com/joshajohnson/sea-picro" target="_blank" rel="noreferrer">Sea-Picro EXT</a></td></tr><tr><td><a href="https://keeb.supply/products/0xcb-helios" target="_blank" rel="noreferrer">0xCB Helios</a></td></tr><tr><td><a href="https://github.com/piit79/Frood" target="_blank" rel="noreferrer">Frood</a></td></tr><tr><td><a href="https://splitkb.com/products/liatris" target="_blank" rel="noreferrer">Liatris</a></td></tr></tbody></table>', 44);
const _hoisted_45 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_45);
}
const platformdev_rp2040 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  platformdev_rp2040 as default
};
