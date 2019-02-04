#!/usr/bin/perl

# i must be owned by the same user id / group id of the ftp user.
# the group is typically "psacln", which is id '10001'
#
# these lines will output error that would normally go to the error_log
# to the web browser
# ..but only if CGI::Carp is installed
#

use CGI;
use CGI::Carp qw(fatalsToBrowser set_message warningsToBrowser);
use CGI qw(:standard);
print header();
warningsToBrowser(1);
set_message("Error.");

# a header must be sent to the browser before output
# for non-parsed output (text/html is parsed as html):
# print "Content-type: text/plain\n\n";
#
#print "Content-type: text/html\n\n";
# this is also handled via:
# print header();

print "Greetings user.\n";

