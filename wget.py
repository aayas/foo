#!/usr/bin/env python

import urllib2
import re
import os

##response = urllib2.urlopen('http://www.liquiddota.net/stream')
##html = response.read()
##print html
##re.search('(?<=Your number is )<b>(\d+)</b>',html).group(0)
##	exp="<a href=\"\/stream\/YYF\" class=\"featurebox\"><\/a>"
##	print re.search(r'<html>',html).group(0)
#
##lines  = html.split('\n')
##for line in lines:
##	#print line
##	if(re.search(r"(rightmenu)",line)):
##		#lr=re.findall(r"stream\/([a-zA-Z0-9_]{2,20})",line)
##		v=re.findall(r"=\"([\S]{2,20}), ([0-9]{2,10}) viewers",line)
##		#	print v
##print line 
#		
##sr=re.findall(r"stream\/([a-zA-Z0-9_]{2,10})",html)
##for s in sr:
#	#print s
##print sr 
##lines  = html.split('\n')
##count=0
##for line in lines:
##	#print line
##	x=re.search(r"stream/([a-zA-Z0-9]{2,10})",line)
##	if x and count<11:
##		#print x.groups(0)
##		#print line 
##		count+=1
#

response = urllib2.urlopen('https://api.twitch.tv/kraken/streams?game=dota%202&limit=15')
html = response.read()

##lines= html.split('\n')
##print len(lines)
##print lines
##i=0;
##for line in lines :
##	if(re.search(r"(viewers on)",line) and i<len(lines)-1 ):
##		print lines[i]
##	i+=1

wr=re.findall(r"streams\/([\S]{2,20}?)\"",html)
#sr=re.findall(r"viewers on\"[\S\s]+\>\"([a-zA-Z0-9_]{2,20})\<\/a\>",html)
#xr=re.findall(r"(href\>[\S]+\<\/a\>)",html)
#print wr

idx=0
xs=""
for strim in wr:
	xs += "[{0}]:{1} ".format(idx,strim) 
	idx+=1
print xs
cmd="livestreamer twitch.tv/"
res="low"

ch = input('choose stream :')

os.system(cmd+wr[ch]+" "+res)
