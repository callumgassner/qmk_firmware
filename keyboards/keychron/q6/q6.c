/* Copyright 2022 @ Keychron (https://www.keychron.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "quantum.h"

#ifdef DIP_SWITCH_ENABLE

bool dip_switch_update_kb(uint8_t index, bool active) {
    if (!dip_switch_update_user(index, active)) {
        return false;
    }
    if (index == 0) {
        default_layer_set(1UL << (active ? 2 : 0));
        layer_clear();
        layer_on(active ? 2 : 0);
        if (layer_state_is(0) || layer_state_is(1)) {
            rgb_matrix_sethsv(132, 255, rgb_matrix_get_val());
        }
        else if (layer_state_is(2) || layer_state_is(3)) {
            rgb_matrix_sethsv(212, 255, rgb_matrix_get_val());
        }
    }
    return true;
}

#endif // DIP_SWITCH_ENABLE

// #if defined(RGB_MATRIX_ENABLE) && (defined(CAPS_LOCK_LED_INDEX) || defined(NUM_LOCK_LED_INDEX))

// bool process_record_kb(uint16_t keycode, keyrecord_t *record) {
//     if (!process_record_user(keycode, record)) {
//         return false;
//     }
//     switch (keycode) {
//         case RGB_TOG:
//             if (record->event.pressed) {
//                 switch (rgb_matrix_get_flags()) {
//                     case LED_FLAG_ALL: {
//                         rgb_matrix_set_flags(LED_FLAG_NONE);
//                         rgb_matrix_set_color_all(0, 0, 0);
//                     } break;
//                     default: {
//                         rgb_matrix_set_flags(LED_FLAG_ALL);
//                     } break;
//                 }
//             }
//             if (!rgb_matrix_is_enabled()) {
//                 rgb_matrix_set_flags(LED_FLAG_ALL);
//                 rgb_matrix_enable();
//             }
//             return false;
//         case KC_NUM:
//             if (record->event.pressed) {
//                 if (host_keyboard_led_state().num_lock) {
//                     print("num_lock on");
//                     rgb_matrix_set_color(NUM_LOCK_LED_INDEX, 0, 255, 0);
//                 }
//                 else {
//                     print("num_lock off");
//                     printf("rgb_matrix_config EEPROM\n");
//                     printf("rgb_matrix_config.enable = %d\n", rgb_matrix_config.enable);
//                     printf("rgb_matrix_config.mode = %d\n", rgb_matrix_config.mode);
//                     printf("rgb_matrix_config.hsv.h = %d\n", rgb_matrix_config.hsv.h);
//                     printf("rgb_matrix_config.hsv.s = %d\n", rgb_matrix_config.hsv.s);
//                     printf("rgb_matrix_config.hsv.v = %d\n", rgb_matrix_config.hsv.v);
//                     printf("rgb_matrix_config.speed = %d\n", rgb_matrix_config.speed);
//                     printf("rgb_matrix_config.flags = %d\n", rgb_matrix_config.flags);
//                     rgb_matrix_set_color(NUM_LOCK_LED_INDEX, 0, 0, 0);
//                 }
//             }
//             return false;
//         case KC_CAPS:
//             if (record->event.pressed) {
//                 if (host_keyboard_led_state().num_lock) {
//                     rgb_matrix_set_color(CAPS_LOCK_LED_INDEX, 0, 255, 0);
//                 }
//                 else {
//                     rgb_matrix_set_color(CAPS_LOCK_LED_INDEX, 0, 0, 0);
//                 }
//             }
//             return false;
//     }
//     return true;
// }

// // bool rgb_matrix_indicators_advanced_kb(uint8_t led_min, uint8_t led_max) {
// //     if (!rgb_matrix_indicators_advanced_user(led_min, led_max)) {
// //         return false;
// //     }
// //     // RGB_MATRIX_INDICATOR_SET_COLOR(index, red, green, blue);
// // #    if defined(CAPS_LOCK_LED_INDEX)
// //     if (host_keyboard_led_state().caps_lock) {
// //         RGB_MATRIX_INDICATOR_SET_COLOR(CAPS_LOCK_LED_INDEX, 0, 255, 0);
// //     } else {
// //         if (!rgb_matrix_get_flags()) {
// //             RGB_MATRIX_INDICATOR_SET_COLOR(CAPS_LOCK_LED_INDEX, 0, 0, 0);
// //         }
// //     }
// // #    endif // CAPS_LOCK_LED_INDEX
// // #    if defined(NUM_LOCK_LED_INDEX)
// //     if (host_keyboard_led_state().num_lock) {
// //         RGB_MATRIX_INDICATOR_SET_COLOR(NUM_LOCK_LED_INDEX, 0, 255, 0);
// //     } else {
// //         if (!rgb_matrix_get_flags()) {
// //             RGB_MATRIX_INDICATOR_SET_COLOR(NUM_LOCK_LED_INDEX, 0, 0, 0);
// //         }
// //     }
// // #    endif // NUM_LOCK_LED_INDEX
// //     return true;
// // }

// #endif // RGB_MATRIX_ENABLE...

