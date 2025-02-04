import React from 'react';
import { Link } from 'react-router-dom';

const PiBringUp = () => (
  <span>
    <h3>Burning Raspberry Pi OS</h3>
    <p>Adding OS to the SD card of the Raspberry Pi</p>
    <ol>
      <li>Get SD card and thumbdrive</li>
      <ol>
        <li>Stick SD into thumbdrive</li>
        <li>Stick thumbdrive in raspberry pi port</li>
      </ol>
      <li>Download imagery by running the command (also found on raspberrypi.com)</li>
      <ol>
        <li>$ sudo apt install rpi-imager</li>
        <li>Run installer by</li>
        <li>$ rpi-imager</li>
      </ol>
      <li>Erase first:</li>
      <ol>
        <li>Erase OS</li>
        <li>Choose SD on storage</li>
        <li>Click write</li>
      </ol>
      <li>Download OS:</li>
      <ol>
        <li>Choose operating system raspberry pi OS 32 bit - Lite for console, Full for GUI</li>
        <li>Choose SD on storage</li>
        <li>Click write again</li>
        <li>Eject after everything is downloaded</li>
      </ol>
      <li>Stick SD card into Pi</li>
      <li>
        <Link to="https://www.raspberrypi.com/software/">Tutorial to Image SD Card</Link>
      </li>
    </ol>
    <h3>Pi Bring Up (By Cloning)</h3>
    <p>Use a pre-existing Raspberry Pi to make a clone</p>
    <h5>On GUI:</h5>
    <ol>
      <li>Insert flash drive(with sd inserted) to pi you want to copy from</li>
      <li>Go to Settings -&gt; Accessories -&gt; SD Card Copier</li>
      <li>Copy from device to flash drive</li>
    </ol>
    <h5>On Console:</h5>
    <ol>
      <li>Make sure USB device visible by the system</li>
      <ol>
        <li>sudo fdisk -l</li>
        <li>sudo lsblk</li>
      </ol>
      <li>Install git</li>
      <ol>
        <li>sudo apt install git</li>
      </ol>
      <li>Install rpi- clone</li>
      <ol>
        <li>git clone external link: https://github.com/billw2/rpi-clone.git</li>
        <li>cd rpi-clone</li>
        <li>sudo cp rpi-clone rpi-clone-setup /usr/local/sbin</li>
        <li>sudo rpi-clone-setup -t $(hostname -s)</li>
        <li>sudo rpi-clone -s</li>
        <li>sudo rpi-clone sda # replace sda here with your device name</li>
      </ol>
      <li>
        <Link to="https://gist.github.com/avoidik/d8fc39a372db680090edd5322d60848f">Tutorial to Migrate Pi from SD to Flash Drive</Link>
      </li>
    </ol>
    <h3>Pi Bring Up (From Scratch)</h3>
    <p>Bringing up a Raspberry Pi when another isn&apos;t accessible</p>
    <h5>On GUI:</h5>
    <ol>
      <li>Set hostname, turn off auto login, turn off screen blanking, turn on SSH access, and set timezone.</li>
      <ol>
        <li>Go to Preferences -&gt; Raspberry Pi Configuration</li>
        <li>Under System select &apos;Change Hostname…&apos; option</li>
        <li>Under System turn off &apos;Auto Login&apos; option</li>
        <li>Under Display turn off &apos;Screen Blanking&apos; option</li>
        <li>Under Interfaces turn on &apos;SSH&apos; option</li>
        <li>Under Localization select &apos;Set Timezone…&apos; option</li>
      </ol>
      <li>Install commonly used programs. (using the terminal)</li>
      <ol>
        <li>$ sudo apt update</li>
        <li>$ sudo apt upgrade</li>
        <li>$ sudo apt install dnsutils vlan vim net-tools nmap wireshark</li>
      </ol>
      <li>Restart the Pi(sudo reboot)</li>
    </ol>
    <h5>On Console:</h5>
    <ol>
      <li>Set hostname and set timezone</li>
      <ol>
        <li>$ sudo raspi-config</li>
        <li>Go to System Options -&gt; Hostname</li>
        <li>Go to Localization Options -&gt; Timezone -&gt; US -&gt; Hawaii</li>
        <li>Hit tab twice to select Finish</li>
      </ol>
      <li>Turn off screen blanking</li>
      <ol>
        <li>Check current time till blank (in seconds) using $ cat /sys/module/kernel/parameters/consoleblank</li>
        <li>If it isn&apos;t 0, edit the follow: $ sudo vim /boot/cmdline.txt</li>
        <li>Type in: consoleblank=0</li>
      </ol>
      <li>Turn on SSH access</li>
      <ol>
        <li>$ sudo systemctl enable ssh</li>
        <li>$ sudo systemctl start ssh</li>
      </ol>
      <li>Install commonly used programs</li>
      <ol>
        <li>$ sudo apt update</li>
        <li>$ sudo apt upgrade</li>
        <li>$ sudo apt install dnsutils vlan vim net-tools nmap wireshark</li>
        <li>if configuring wireshark-common message pops up hit no</li>
      </ol>
      <li>Restart the pi</li>
      <ol>
        <li>$ sudo shutdown -r 0</li>
      </ol>
      <li>
        <Link to="https://www.tomshardware.com/how-to/raspberry-pi-change-hostname">Tutorial to Change Hostname</Link>
      </li>
    </ol>
    <h3>Legacy Instructions</h3>
    <ul>
      <li>Sync time *NEED TO UPDATE*</li>
      <ul>
        <li>sudo raspi-config , Localisation Options -&gt; Timezone -&gt; US -&gt; Hawaii</li>
        <li>sudo timedatectl set-ntp false , Control the system time and date, Controls whether network time synchronization is active and enabled. In this case we deactive and disable it</li>
        <li>sudo date -s &apos;YYYY-MM-DD HH:MM:SS&apos; , Set the date and time of pi</li>
        <li>sudo timedatectl set-ntp true , Control the system time and date, Controls whether network time synchronization is active and enabled. In this case we active and enable it</li>
        <li>sudo timedatectl status, displays status</li>
      </ul>
    </ul>
  </span>
);

export default PiBringUp;
