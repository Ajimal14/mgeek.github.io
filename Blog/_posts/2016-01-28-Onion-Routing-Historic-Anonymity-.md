---
layout: post
title: Onion Routing-Historic Anonymity 
---
<strong>Onion Routing Timeline</strong>
<br>

<strong>1995:</strong>
Initial work on Onion Routing begins, funded by ONR. Many ideas tossed about, some best forgotten, some disappear only to resurface in the generation 2 system, e.g., all onions are one hop. Contrastingly, the first design does not include any mixing. Realtime mixing is added to the design in the middle of Spring 1996 and does not disappear again until generation 2.<br>
<strong>1996:</strong>
Another early discussion idea that was not reflected in published or deployed design till much later: Discussion in April and May of using DH keys rather than sending the onion key. The idea was not to have these in one hop onions as in generation 2, but to include public DH keys from the originator in the onion layers. These were to be combined with published public DH keys. Interestingly, this would still yield perfect forward secrecy if the private DH keys of the onion routers were rotated on, e.g., a daily basis. However, our primary focus was on potential efficiency gains in computation rather than this point.
Initial formal presentation and publication of Onion Routing "Hiding Routing Information" at the First Information Hiding Workshop, May 31. Proof of concept prototype on Solaris 2.5.1/2.6 is deployed, consisting of a 5 node system running on a single machine at NRL with proxies for Web browsing with and without sanitization of the application protocol data. Initial paper describes many features that will not be deployed or addressed until generation 2. These include rendezvous points and tagging attacks. Work begins on generation 1 design. This includes removal of crypto from the main code body, both as good modular design, and because export restrictions at the time would preclude distribution of generation 0 code. General availability of the sourcecode is necessary because trust and incentive requirements for the system to have its intended security properties require that it be open source, although that term was not yet in common use in 1996. The generation 1 code that existed in May was approved for general public distribution in July.<br>
<strong>1997:</strong>
In addition to ONR funding, robustness aspects of Onion Routing are funded by DARPA under High Confidence Networks Program.
Design using Onion Routing for location hidden use of cellular (mobile) phones and for private control of location information in active badges or other location tracking devices is published at the Security Protocols Workshop in April. Early specific examples of both location hidden server and rendezvous points. See also the slides from 1996 illustrating rendezvous IRC chat servers.
Amongst the topics of discussion is the viability of webpage profiling attacks and circuit latency profiling attacks. These are both independently introduced in the literature later on by Back et al. in a paper at Information Hiding 2001, and webpage profiling is empirically documented to be possible by Hintz in a paper at Privacy Enhancing Technologies in 2002.
Most of generation 1 design is published at the IEEE Symposium on Security and Privacy. Numerous changes from generation 0. Variable length routes (variable at source: generation 0 already included ability of intermediate nodes to loose onion route, e.g., when no direct connection to next node was available). Separation of proxy from router so, e.g., a client need not trust a remote proxy with the route (First mentioned in a publication in "Proxies for Anonymous Routing" ACSAC 96.) Exit policies are introduced. Separate crypto module, capable of running on a separate machine or in specialized hardware. In addition to performance and modularity enhancements, at the time there are still concerns about export constraints on crypto which this removes. Separate database engines intended to flood membership, linkstate, exit policies, etc. without a central point of failure are designed. An overview of the different modules of this "next generation design" can be found here. A detailed specification of the data structures can be found here.
Hooks for inband signalling to enable communication with routers along a route, e.g., for long range padding, route hopping, etc. are put in place. Debate amongst designers delays their implementation until generation 2.
Tests are run on I/O performance leading to abandonment of original 44 byte cell size intending to fit in ATM cells. Also, performance testing and improvement using crypto accelerator boxes from NCipher to perform public-key operations.<br>
<strong>1998:</strong>
Several generation 0/1 networks are set up. We set up a distributed network of 13 nodes at NRL, NRAD, and UMD. Two independent test networks are set up using the proof-of-concept code with which we have no association besides providing the basic code and a little advice. One in the Canadian Ministry of Defence.
NRAD redirector is built: runs on Windows NT and redirects all TCP traffic to the Onion Routing network without the need for special proxies (but requires a locally running kernel mod). Several other proxies built include those for HTTP (anonymizing and nonanonymizing versions), FTP, SMTP, and rlogin.
We hit our maximum usage for the generation 0 prototype running on the local NRL testbed. An average of over 50,000 hits per day occured during the final months, or more than 1 million connections per month. Peak reported load of 84,022 connections occured on 12/31/98.
Zero Knowledge Systems announces the Freedom Network late in 1998. Freedom was a commercial network with many similarities to Onion Routing. Most notable differences are (1) Onion Routing runs over TCP while Freedom ran over UDP, (2) Freedom was commercially funded rather than volunteer based, and (3) Freedom included a pseudonym management scheme both to limit the network to paid subscribers and to allow persistent pseudonymous communication. (The Freedom Network was deployed from late 1999 till late 2001, when it was shut down because it was unable to acheive enough widespread acceptance to cover its costs.)<br>


<strong>1999:</strong>
Alan Berman Research Publication Award given for "Anonymous Connections and Onion Routing". This paper provides the most detailed specification published of generation 1 Onion Routing, although some features are added later.
Work on Onion Routing development is suspended. There is no new funding for it, plus most principals and all developers have left NRL for other pursuits. Nonetheless, research and analysis work continues.<br>
<strong>
2000:</strong>
The generation 0 proof-of-concept network is shut down in January. This experimental onion routing network consisted of five onion routers run on a single Sun Ultra 2 2170. The machine had two 167 MHz processors, and 256MB of memory. Anonymous connections were routed through a random sequence of five onion routers.
During its operating period of roughly two years, over twenty million requests from more than sixty countries and all major US top level domains were processed by the initial prototype Onion Routing network. An average of over 50,000 hits per day occured during the final year. Peak reported load of 84,022 connections occured on 12/31/98.
A security analysis paper is presented at the first Privacy Enhancing Technologies Workshop---where the seeds of future Tor development are unknowingly sown when Syverson meets Dingledine for the first time. (official title of the first workshop was Design Issues in Anonymity and Unobservability and the proceedings was titled Designing Privacy Enhancing Technologies). This paper is where the c^2/n^2 analysis is set out. Analyses of strategies for picking route length and the effect on security are also made but not published in the final version of the paper.
Patent issued in July.
JAP (Java Anon Proxy) Web Mixes goes online in autumn. This is a mix cascade based Web proxy organized through TU Dresden. Unlike the Freedom network mentioned above, this is not really a flavor of Onion Routing. The threat model and approach are more based on traffic from users in persistent groups and formal independence of mix operators, while Onion Routing includes elements of path and jurisdictional uncertainty on a per circuit basis. The JAP team independently implemented a client for Tor in 2004 that functions with the Tor network.<br>
<strong>
2001:</strong>
Work on OR development resumes, funded by DARPA under Fault Tolerant Networks Program with initial goal of making the generation 1 code complete enough to run a beta network and the subsequent goal of adding fault tolerance and resource management.
Edison Invention Award presented for the invention of Onion Routing.<br>
<strong>
2002:</strong>
Generation 1 code abandoned as too dated and crufty. Work on generation 2 (Tor) code begins building initially off of a codebase originally produced by Matej Pfajfar at Cambridge University for his undergraduate final-year project. However, by 2004, none of that code romains in the Tor codebase.
Many outside changes in the world over the last several years have made life simpler for us, particularly in the proxy area. 1. Others have done work on freely available filtering proxies so there is no need to continue writing our own for cases where filtering of data stream is desired. We adopt Privoxy for this purpose. 2. As firewalls become more common, the SOCKS protocol has now become close enough to ubiquitous that nearly all the applications we care about are SOCKS compliant. We no longer need to write application proxies for each application. And others write proxies for those that may not be, for example, SSH. DNS translation leaking IP address and other issues keep us from getting entirely out of the proxy business. 3. Export restrictions on crypto are no longer an issue.
Some features are added only to be later abandoned such as router twins to survive node crashes.<br>
<strong >
2003:</strong>
Funding from ONR for generation 2 development and deployment, DARPA for building in resource management and fault tolerance, and NRL internal funding from ONR for building survivable hidden servers.

In October, Tor network is deployed, and Tor code is released under the free and open MIT license. Both the network and code development are managed through the Tor development site. By the end of 2003, the network has about a dozen volunteer nodes, mostly in the US with one in Germany.<br>
<strong>
2004:</strong>
Location hidden services are deployed in the spring when the hidden wiki is set up.
The Tor design paper is published at USENIX Security.
Funding from ONR and DARPA ends in Q4.
Funding from EFF for continued Tor deployment and development begins. 
Internal NRL funding (from ONR) for work on location hidden servers continues.
By the end of 2004 there are over 100 Tor nodes on three continents.
(As of mid May 2005, there are about 160 nodes on five continents. Sustained application traffic throughout the first half of 2005 is between five and ten megabytes/second from an indeterminate number of users estimated to be in the tens of thousands. [The network hides this information, even from us.])